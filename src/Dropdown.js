import React from 'react';


export class Dropdown extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <label>Print Type:</label>
                    <select name='all'>
                        <option value='all' selected>all</option>
                    </select>
                    <label>Book Type:</label>
                    <select name='no filter'>
                        <option value='no filter' selected>no filter</option>
                    </select>
                </form>
            </div>
        )
    }
}