import React from 'react';
import "../MyFavList/MyFavStyles.css"
const MyFavList = () => {
  const data = localStorage.getItem('wishList');
  let parsedData = [];

  if (data) {
    try {
      parsedData = JSON.parse(data);
    } catch (error) {
      console.error('Error', error);
    }
  }

  return (
    <>
      <h1 style={{ fontSize: 20, textAlign: 'center', fontWeight: 900, fontFamily: "sans-serif" }}>My Favorites List</h1>
      {parsedData?.length > 0 ? (<>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Product</th>
              <th>Category</th>
              <th>Ingredients </th>
            </tr>
          </thead>
          <tbody>

            {parsedData?.map((item, index) => (
              <tr key={index}>
                <td>#{index + 1}</td>
                <td>
                  <div className="">
                    <img src={item.strMealThumb} alt="" style={{ width: '50px', height: '50px' }} />
                  </div>
                </td>
                <td>{item.strCategory}</td>
                <td>{item.strIngredient2}</td>
              </tr>
            ))}

          </tbody>

        </table>
      </>)
        : (<>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
            <h1 style={{ fontSize: 14, textAlign: 'center', fontWeight: 400, fontFamily: "sans-serif", padding: 10 }}>My Favorites List is Empty</h1>

          </div>
        </>)}
    </>
  );
};

export default MyFavList;
