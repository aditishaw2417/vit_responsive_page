import React from "react";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar flex flex-wrap items-center font-bold justify-between px-3 py-3 bg-red-900 text-white space-x-0">
        <div className="logo-container">
          <img src="/images/vit-ap-logo.jpg" alt="Logo" className="logo w-20" />
        </div>
        <li className="admissions group relative">
          <a href="#">ADMISSIONS</a>
          <ul className="admissions_dropdown absolute hidden group-hover:block font-thin top-10 z-10 bg-red-900">
            <li>
              <a>Overview</a>
            </li>
            <li>
              <a>B.Tech.</a>
            </li>
            <li>
              <a>BBA</a>
            </li>
            <li>
              <a>LAW</a>
            </li>
            <li>
              <a>B.A.-M.A.</a>
            </li>
            <li>
              <a>B.Sc</a>
            </li>
            <li>
              <a>M.Sc</a>
            </li>
            <li>
              <a>B.Com.</a>
            </li>
            <li>
              <a>M.TECH.</a>
            </li>
            <li>
              <a>International</a>
            </li>
            <li>
              <a>Ph.D.</a>
            </li>
            <li>
              <a>Application Process</a>
            </li>
            <li>
              <a>Fees and Scholarships</a>
            </li>
            <li>
              <a>STARS</a>
            </li>
            <li>
              <a>Affidavit</a>
            </li>
            <li>
              <a>Refund Policies</a>
            </li>
            <li>
              <a>Videos</a>
            </li>
          </ul>
        </li>
        <li className="academics group relative">
          <a href="#">ACADEMICS</a>
          <ul className="academics_dropdown absolute hidden group-hover:block font-thin top-10 z-10 bg-red-900">
            <li>
              <a>Overview</a>
            </li>
            <li>
              <a>Schools</a>
            </li>
            <li>
              <a>Faculty</a>
            </li>
            <li>
              <a>Academic Calendar</a>
            </li>
            <li>
              <a>Centre of Examinations (CoE)</a>
            </li>
            <li>
              <a>International Collaborations</a>
            </li>
            <li>
              <a>Engineering Clinics</a>
            </li>
            <li>
              <a>Value Added Courses (VACs)</a>
            </li>
            <li>
              <a>NAAC</a>
            </li>
          </ul>
        </li>
        <li className="career group relative">
          <a href="#">CAREER DEVELOPMENT CENTER</a>
          <ul className="cdc_dropdown absolute hidden group-hover:block font-thin top-10 z-10 bg-red-900">
            <li>
              <a>Overview</a>
            </li>
            <li>
              <a>Super Dream Offers</a>
            </li>
            <li>
              <a>Dream Offers</a>
            </li>
            <li>
              <a>Internship</a>
            </li>
            <li>
              <a>Industrial Collaboration</a>
            </li>
            <li>
              <a>CDC Office</a>
            </li>
            <li>
              <a>Statistics</a>
            </li>
          </ul>
        </li>
        <li className="facilities group relative">
          <a href="#">FACILITIES</a>
          <ul className="facilities_dropdown absolute hidden group-hover:block font-thin top-10 z-10 bg-red-900">
            <li>
              <a>Infrastructure</a>
            </li>
            <li>
              <a>Hostels</a>
            </li>
            <li>
              <a>Library</a>
            </li>
            <li>
              <a>VIT-AP Labs</a>
            </li>
            <li>
              <a>Bank and ATM</a>
            </li>
            <li>
              <a>Cafeteria</a>
            </li>
            <li>
              <a>Transport</a>
            </li>
            <li>
              <a>Health Centre</a>
            </li>
            <li>
              <a>Guest House</a>
            </li>
            <li>
              <a>Facilities to Employee</a>
            </li>
          </ul>
        </li>
        <li className="campusLife group relative">
          <a href="#">CAMPUS LIFE</a>
          <ul className="campuslife_dropdown absolute hidden group-hover:block font-thin top-10 z-10 bg-red-900">
            <li>
              <a>Overview</a>
            </li>
            <li>
              <a>Clubs & Chapters</a>
            </li>
            <li>
              <a>Celebrations</a>
            </li>
            <li>
              <a>Sports</a>
            </li>
            <li>
              <a>IIC</a>
            </li>
            <li>
              <a>UDC</a>
            </li>
            <li>
              <a>Anti-Ragging Committee</a>
            </li>
            <li>
              <a>Student Counselling Center</a>
            </li>
            <li>
              <a>Grievances Redressal Committee</a>
            </li>
            <li>
              <a>Gallery</a>
            </li>
            <li>
              <a>Campus Tour</a>
            </li>
          </ul>
        </li>
        <li className="research group relative">
          <a href="#">RESEARCH</a>
          <ul className="research_dropdown absolute hidden group-hover:block font-thin top-10 z-10 bg-red-900">
            <li>
              <a>Academic Research</a>
            </li>
            <li>
              <a>SpoRIC</a>
            </li>
            <li>
              <a>Centers of Excellence</a>
            </li>
            <li>
              <a>URE Projects</a>
            </li>
            <li>
              <a>TBI Projects</a>
            </li>
          </ul>
        </li>
        <li className="about group relative">
          <a href="#">ABOUT</a>
          <ul className="about_dropdown absolute hidden group-hover:block font-thin top-10 z-10 bg-red-900">
            <li>
              <a>Overview</a>
            </li>
            <li>
              <a>Vision & Mission</a>
            </li>
            <li>
              <a>Leadership</a>
            </li>
            <li>
              <a>Governance</a>
            </li>
            <li>
              <a>Policies</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
            <li>
              <a>How to Reach VIT-AP?</a>
            </li>
            <li>
              <a>Careers</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </li>
        <li className="advantages group relative">
          <a href="#">VIT ADVANTAGES</a>
        </li>
        <li className="campuses group relative">
          <a href="#">🎓 VIT Campuses</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
