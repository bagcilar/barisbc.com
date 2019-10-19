
import React, { Component } from 'react';

//colouring of the nav bar according to the target value passed
export function navColourAdjuster(target) {
    document.getElementById("homeSectionButton").style.color = "grey";
    document.getElementById("projectsSectionButton").style.color = "grey";
    document.getElementById("aboutSectionButton").style.color = "grey";
    document.getElementById("contactSectionButton").style.color = "grey";
    document.getElementById(target).style.color = "brown";
}

//colouring of the section headers according to the target value passed
export function sectionHeaderColourAdj(target) {
  document.getElementById("aboutHeader").style.color = "grey";
  document.getElementById("projectsHeader").style.color = "grey";
  document.getElementById("contactHeader").style.color = "grey";
  document.getElementById(target).style.color = "brown";
}


class helperFunctions extends Component {

  //listens for scrolling events
  componentDidMount() {
    window.addEventListener('scroll', this.onWindowScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onWindowScroll);
  }

  //checks the current viewport location when there is a scroll, adjusts colour of nav bar item accordingly
  onWindowScroll() {
    var homeBounding = document.getElementById("homeSection").getBoundingClientRect();
    var aboutBounding = document.getElementById("aboutMeSection").getBoundingClientRect();
    var projectsBounding = document.getElementById("projectsSection").getBoundingClientRect();
    var contactBounding = document.getElementById("contactSection").getBoundingClientRect();
    var threshold = 90;

    if (homeBounding.top > -threshold && homeBounding.top < threshold) {
      navColourAdjuster("homeSectionButton")
      sectionHeaderColourAdj("contactHeader")
    }
    else if (aboutBounding.top > -threshold && aboutBounding.top < threshold) {
      navColourAdjuster("aboutSectionButton")
      sectionHeaderColourAdj("aboutHeader")
    }
    else if (projectsBounding.top > -threshold && projectsBounding.top < threshold) {
      navColourAdjuster("projectsSectionButton")
      sectionHeaderColourAdj("projectsHeader")
    }
    else if (contactBounding.top > -threshold && contactBounding.top < threshold) {
      navColourAdjuster("contactSectionButton")
      sectionHeaderColourAdj("contactHeader")
    }
  }

  render() {

    return (
      <div></div>
    );
  }

}

export default helperFunctions;