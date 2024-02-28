import React from 'react';

const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No orders, sorry</p>;
  return (
    
      <table class="styled-table">
              <tr>
                <th  class="help3">   </th>
                <th  class="help3">   </th>
                <th  class="help3">   </th>
                <th  class="help3">   </th>
                
                <th  className='repo-text'>Quantity:  </th>
                <th  className='repo-text'> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Provenance:   </th>
                <th  className='repo-text'>  </th>
              </tr>

              <tr>
      {repos.map((repo) => {
        return (
          
          <div class="div1">
            <td class="td1, help">  </td>
                <td class="td1, panda-icon"> </td>
                <td class="td1"> {repo.description} </td>
                <td class="td1">{repo.quantity} </td>
                <td class="td1">{repo.itemCategory} </td>
              
          </div>
             
          
          
        );
      })}
      </tr>
      </table>
    
  );
};
export default List;
