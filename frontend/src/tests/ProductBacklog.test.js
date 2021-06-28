import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import ProductBacklog from '../components/ProductBacklog'

test('product backlog renders', () => {
  const stories = []

  const component = render(
    <ProductBacklog stories={stories} />
  )

  expect(component.container).toHaveTextContent(
    'Product Backlog'
  )
})