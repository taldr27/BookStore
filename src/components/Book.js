import React from 'react';
import PropTypes from 'prop-types';
import RemoveBook from './RemoveBook';
import '../styles/Book.css';

const percentageStyle = {
  fontSize: '2rem',
  fontFamily: 'Montserrat',
  color: '#121212',
};

const completedStyle = {
  fontSize: '0.875rem',
  fontFamily: 'Montserrat',
  opacity: '0.5',
  color: '#121212',
};

const currentChapter = {
  fontSize: '0.813rem',
  opacity: '0.5',
};

const updateStyle = {
  marginTop: '1em',
  width: '70%',
};

const Book = (
  {
    id, title, author, category,
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
                  <span className="span-category">{category}</span>
                  <span className="span-title">{title}</span>
                  <span className="span-author">{author}</span>
                  <div className="book-buttons-container">
                    <button type="button">Comments</button>
                    <span>|</span>
                    <RemoveBook id={id} />
                    <span>|</span>
                    <button type="button">Edit</button>
                  </div>
                </div>
                <div className="progress-container">
                  <div className="graphic-progress">
                    <div className="circular-progress" />
                    <div className="progress-number">
                      <span style={percentageStyle}>64%</span>
                      <span style={completedStyle}>
                        Completed
                      </span>
                    </div>
                  </div>
                  <div className="line" />
                  <div className="current-chapter">
                    <span style={currentChapter}>Current Chapter</span>
                    <span>Chapter 3: &ldquo;A Lesson Learned&ldquo;</span>
                    <button style={updateStyle} type="button">Update progress</button>
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
  category: PropTypes.string.isRequired,
};

export default Book;
