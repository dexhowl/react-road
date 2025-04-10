import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import List from '../src/components/List'


test('Renders List of Cars', async () => {
  const { getByText} = render(<List />)

  await expect.element(getByText('2022 Honda Civic: 109,240 Miles')).toBeInTheDocument() 
  await expect.element(getByText('2025 Toyota Camary: 21,530 Miles')).toBeInTheDocument()
})