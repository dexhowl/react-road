
export default function Item({details}) {

    return (
        <li>{details.year} {details.make} {details.model}: {details.miles} Miles</li>
    )
  }