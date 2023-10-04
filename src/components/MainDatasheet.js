import { DataSheetGrid, textColumn, keyColumn } from 'react-datasheet-grid'
import { useState } from 'react';

// Import the style only once in your app!
import 'react-datasheet-grid/dist/style.css'

const MainDatasheet = () => {
  const [ data, setData ] = useState([
    { firstName: 'Elon', lastName: 'Musk' },
    { firstName: 'Jeff', lastName: 'Bezos' },
  ])

  const columns = [
    { ...keyColumn('firstName', textColumn), title: 'First name' },
    { ...keyColumn('lastName', textColumn), title: 'Last name' },
  ]

  return (
    <DataSheetGrid
      value={data}
      onChange={setData}
      columns={columns}
    />
  )
}

export default MainDatasheet;