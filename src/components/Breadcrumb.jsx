/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items, urls }) => {
  return (
    <nav className="lg:ml-5 text-lg">
      <ol className="list-none p-0 inline-flex xl:w-auto">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mx-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
            {index === items.length - 1 ? (
              <span className="font-semibold">{item}</span>
            ) : (
              <Link to={urls[index]} className="text-blue-600 hover:underline">
                {item}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
