import { useState } from 'react'
interface ListGroupProps {
  items: string[];
  heading?: string;
  onSelectItem?: (item: string) => void;
}
const ListGroup = ({ items, heading, onSelectItem }: ListGroupProps) => {

    // handleClick function to log the event
    const [selectedIndex, setSelectedIndex] = useState(-1);

    // Function to handle click on list item
    const handleClick = (index: number) => {
        setSelectedIndex(index);

        if (onSelectItem) {
            onSelectItem(items[index]);
        }
    };
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      {items.length > 0 && <p>We have {items.length} items in the list</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className={selectedIndex === index ? "list-group-item active" : "list-group-item"} style={{ cursor: 'pointer' }} onClick={() => handleClick(index)}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
