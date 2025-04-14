import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import List from '../src/components/List'

const cars = [
  {
    make: 'Honda',
    model: 'Civic',
    year: '2022',
    miles: '109,240',
    id:'0' 
  },
  {
    make: 'Toyota',
    model: 'Camary',
    year: '2025',
    miles: '21,530',
    id:'1'
  },
  {
    make: 'Audi',
    model: 'R8',
    year: '2026',
    miles: '1,500',
    id:'2'
  },
  {
    make: 'BMW',
    model: 'M4',
    year: '2024',
    miles: '10,500',
    id:'3'
  }
];


test('Renders List of Cars', async () => {
  const { getByText} = render(<List list={cars} />)

  await expect.element(getByText('2022 Honda Civic: 109,240 Miles')).toBeVisible() 
  await expect.element(getByText('2025 Toyota Camary: 21,530 Miles')).toBeVisible()
  await expect.element(getByText('2026 Audi R8: 1,500 Miles')).toBeVisible()
  await expect.element(getByText('2024 BMW M4: 10,500 Miles')).toBeVisible()
}) 