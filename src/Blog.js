import React, { useEffect, useState } from 'react'

export default function () {

    const url = "https://jsonplaceholder.typicode.com/posts";
    const [data, setData] =useState([]);

    const fetchInfo = () => {
        return fetch(url)
          .then((res) => res.json())
          .then((d) => setData(d))
      }


      useEffect(() => {
        fetchInfo();
      }, []);


      function deleteUser(id)
      {
        fetch('https://jsonplaceholder.typicode.com/posts/1',{
            method:'DELETE'

        }).then((result)=>
        {
            result.json().then((resp)=>
            {
                fetchInfo();

            })

        })
        //alert(id);

      }

  return (
    <div className="row">
       
        <div className='col-md-6'>
<br/>
       <table class="table table-dark table-striped">
       <thead>
            <tr>
                <th>userId</th>
                <th>title</th>
                <th>body</th>
               
                <th>Operation</th>
         
            </tr>
            </thead>
            <tbody>
            {
                data.map((datavalue,index)=>{
                    return(
                    <tr key={datavalue.id}>
                        <td>{datavalue.userId}</td>
                        <td>{datavalue.title}</td>
                        <td>{datavalue.body}</td>
                       
                        <td><button type='button' className='btn btn-danger' onClick={()=>deleteUser(datavalue.userId)} >Delete</button></td>
                        

                    </tr>
                    )


                })
            }
</tbody>
        </table>

        </div>
        <div className='col-md-6'></div>

    </div>
  )
}
