import React from 'react';

function AuctionForm(props) {
    return (
      <div className="AuctionForm">
        <form onSubmit={props.onSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              onChange={e =>
                props.onChange({
                  title: e.currentTarget.value,
                })
              }
              type="text"
              name="title"
              value={props.title}
            />
          </div>
          <div>
            <label htmlFor="details">Details</label>
            <textarea
              onChange={e =>
                props.onChange({
                  details: e.currentTarget.value,
                })
              }
              type="text"
              name="details"
              value={props.details}
            />
          </div>
          <div>
            <label htmlFor="end_date">Ends On</label>
            <input
              onChange={e =>
                props.onChange({
                  end_date: e.currentTarget.value,
                })
              }
              type="date"
              name="end_date"
              value={props.end_date}
            />
          </div>
          <div>
            <label htmlFor="price">Starting Price</label>
            <input
              onChange={e =>
                props.onChange({
                  price: parseInt(e.currentTarget.value),
                })
              }
              type="number"
              name="price"
              value={props.price}
            />
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
  
  export default AuctionForm;