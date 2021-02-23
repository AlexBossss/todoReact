import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from "../context";

 function ListItem({item, index, onChange}) {
     const classes = [];
     const {removeTodo} = useContext(Context)

     if(item.checked){
         classes.push("done")
     }
    return <li className="list-item">
        <span className={classes.join(' ')}>
            <input type="checkbox" onChange={() => onChange(item.id)}/>
            <strong className="list-item__number">{index + 1}</strong>
            <span className="list-item__text">{item.value}</span>
        </span>

        <button onClick={()=>removeTodo(item.id)}>&times;</button>

    </li>
}

ListItem.propTypes = {
    item: PropTypes.object,
    index: PropTypes.number,
    onChange: PropTypes.func
}

export default ListItem