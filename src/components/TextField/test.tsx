import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'
import { Email } from '@styled-icons/material-outlined'

import TextField from '.'

describe('<TextField />', () => {
  it('should render with a label', () => {
    renderWithTheme(<TextField label="Label" labelFor="Field" id="Field" />)

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('should render withou a label', () => {
    renderWithTheme(<TextField />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('should render with a placeholder', () => {
    renderWithTheme(<TextField placeholder="hey you" />)

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  it('should render with an icon', () => {
    renderWithTheme(<TextField icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render with an icon on the right side', () => {
    renderWithTheme(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 })
  })

  it('should change its value when typing', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        labelFor="TextField"
        id="TextField"
      />
    )

    // pega o input que possui a role textbox
    const input = screen.getByRole('textbox')
    // cria um texto
    const text = 'This is my new text'

    // digita o texto criado no input
    userEvent.type(input, text)

    await waitFor(() => {
      // espera que o texto seja digitado no input
      expect(input).toHaveValue(text)
      // espera que o onInput seja chamado de acordo com o numero de caracteres do texto
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('Does not change its value when disabled', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        labelFor="TextField"
        id="TextField"
        disabled
      />
    )

    // pega o input que possui a role textbox
    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()
    // cria um texto
    const text = 'This is my new text'

    // digita o texto criado no input
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })
    expect(onInput).not.toHaveBeenCalled()
  })

  it('should render with error', () => {
    const { container } = renderWithTheme(
      <TextField
        icon={<Email data-testid="icon" />}
        label="TextField"
        labelFor="TextField"
        error="Error message"
      />
    )

    expect(screen.getByText('Error message')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Is accessible by tab', () => {
    renderWithTheme(
      <TextField label="TextField" labelFor="TextField" id="TextField" />
    )

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })
})
