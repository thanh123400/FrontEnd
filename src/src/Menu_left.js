import React from 'react';
import './Menu_left.css';

function Menu_left() {
  return (
    <div className="corner-component">
      <ul >
        <li className="subsection">
          My Open Library
        </li>
        <li className="subsection">
          Browse
        </li>
        <li>
        <a href="/subjects" data-ol-link-track="Hamburger|Subjects">
          Subjects
        </a>
        </li>
        <li>
        <a href="/trending" data-ol-link-track="Hamburger|Trending">
          Trending
        </a>
        </li>
        <li>
        <a href="/explore" data-ol-link-track="Hamburger|Explore">
          Library Explorer
        </a>
        </li>
        <li>
        <a href="/lists" data-ol-link-track="Hamburger|Lists">
          Lists
        </a>
        </li>
        <li>
        <a href="/collections" data-ol-link-track="Hamburger|Collections">
          Collections
        </a>
        </li>
        <li>
        <a href="/k-12" data-ol-link-track="Hamburger|K12Library">
          K-12 Student Library
        </a>
        </li>
        <li>
        <a href="/booktalks" data-ol-link-track="Hamburger|BookTalks">
          Book Talks
        </a>
        </li>
        <li>
        <a href="/random" data-ol-link-track="Hamburger|RandomBook">
          Random Book
        </a>
        </li>
        <li>
        <a href="/advancedsearch" data-ol-link-track="Hamburger|AdvancedSearch">
          Advanced Search
        </a>
        </li>
        <li class="subsection">
          Contribute
        </li>
        <li>
        <a href="/books/add" data-ol-link-track="Hamburger|AddBook">
          Add a Book
        </a>
        </li>
        <li>
        <a href="/recentchanges" data-ol-link-track="Hamburger|RecentEdits">
          Recent Community Edits
        </a>
        </li>
        <li class="subsection">
          Resources
        </li>
        <li>
        <a href="/help" data-ol-link-track="Hamburger|Help">
          Help &amp; Support
        </a>
        </li>
        <li>
        <a href="/developers" data-ol-link-track="Hamburger|DevelopersHelp">
          Developer Center
        </a>
        </li>
        <li>
        <a href="/librarians" data-ol-link-track="Hamburger|LibrariansHelp">
          Librarians Portal
        </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu_left;