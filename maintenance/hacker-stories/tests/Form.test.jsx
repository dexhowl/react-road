/* globals describe render screen afterEach vi it renderHook act*/

import { expect } from "vitest";
import Form from "../src/components/Form";
import Input from "../src/components/Input";

describe("Form", () => {
  const FormProps = {
    userInput: 'Runescape',
    formAction: vi.fn(),
    onSearch: vi.fn(),

  };

  afterEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
    
  });

  it('renders input, label, and button elements', () => {
    render(
      <Form {...FormProps} />
    )

    expect(screen.getByLabelText(/Search/)).toBeInTheDocument();
    expect(screen.getByDisplayValue("Runescape")).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();

  })


  
  it("executes formAction funciton on button click", () => {
    render(
      <Form {...FormProps} />
    );

    fireEvent.click(screen.getByRole('button'));

    expect(FormProps.formAction).toHaveBeenCalledOnce();
    
  });

  it("executes onSearch function when input changes", () => {
    render(
      <Form {...FormProps} />
    );

    fireEvent.change(screen.getByDisplayValue("Runescape"),  {
      target: {value: "Tesla"}
    });

    expect(FormProps.onSearch).toHaveBeenCalledOnce();
    
    
  });
  
});
