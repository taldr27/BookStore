import React from 'react';

const Books = () => (
  <div>
    <ul>
      <li>
        <div>
          <div className="book-data">
            <div className="book-details">
              <span>Category</span>
              <span>Title</span>
              <span>Author</span>
              <div>
                <button type="button">Comments</button>
                <button type="button">Remove</button>
                <button type="button">Edit</button>
              </div>
            </div>
            <div className="progress-container">
              <div className="circular-progress">
                <img alt="circular-progress" />
              </div>
              <div className="progress-number">
                <span>64%</span>
              </div>
              <div className="current-chapter">
                <span>Chapter 17</span>
              </div>
              <button type="button">Update progress</button>

            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
);

export default Books;
