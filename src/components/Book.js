import React from 'react';
import PropTypes from 'prop-types';
import RemoveBook from './RemoveBook';
import '../styles/Book.css';

const Book = (
  {
    id, title, author, completed, chapter,
  },
) => (
  (
    <div className="book-container">
      <div>
        <ul>
          <li>
            <div>
              <div className="book-data">
                <div className="book-details">
                  <span>Action</span>
                  <span>{title}</span>
                  <span>{author}</span>
                  <div className="book-buttons-container">
                    <button type="button">Comments</button>
                    <RemoveBook id={id} />
                    <span>|</span>
                    <button type="button">Edit</button>
                  </div>
                </div>
                <div className="progress-container">
                  <div className="graphic-progress">
                    <div className="circular-progress" />
                    <div className="progress-number">
                      <span>{completed}</span>
                      <span>Completed</span>
                    </div>
                  </div>
                  <div className="current-chapter">
                    <span>Current Chapter</span>
                    <span>
                      {`Chapter ${chapter}`}
                    </span>
                    <button type="button">Update progress</button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  completed: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
};

export default Book;
