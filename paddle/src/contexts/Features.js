import React from 'react';
import styled from 'styled-components';
import { FlexContent } from '../styles/ReuseableStyles';
import piano from '../images/piano.png';
import {
  firstBreakOutHomePage,
  ThirdBreakOutHomePage,
  FourthBreakOutHomePage,
} from '../styles/MediaQueries';

function Features() {
  return (
    <StyledFeatures>
      <StyledFeaturesLeft>
        <StyledFeaturesLeftImage src={piano} alt="piano" />
      </StyledFeaturesLeft>
      <StyledFeaturesRight>
        <StyledFeaturesRightHeading>
          Features We Provide For You
        </StyledFeaturesRightHeading>
        <StyledFeaturesRightParagraph>
          Leaverage our decade-long expertise in IT strategy consulting, product engineering and mobile development.
        </StyledFeaturesRightParagraph>
        <StyledFeaturesRightLists>
          <StyledFeaturesRightListsItem>
            <StyledFeaturesRightListsItemBox> </StyledFeaturesRightListsItemBox>
            <StyledFeaturesRightListsItemContent>
              {' '}
              Digital Marketing
            </StyledFeaturesRightListsItemContent>
          </StyledFeaturesRightListsItem>
          <StyledFeaturesRightListsItem>
            <StyledFeaturesRightListsItemBox> </StyledFeaturesRightListsItemBox>
            <StyledFeaturesRightListsItemContent>
              {' '}
              Mobile Development
            </StyledFeaturesRightListsItemContent>
          </StyledFeaturesRightListsItem>
          <StyledFeaturesRightListsItem>
            <StyledFeaturesRightListsItemBox> </StyledFeaturesRightListsItemBox>
            <StyledFeaturesRightListsItemContent>
              {' '}
              IT Consulting
            </StyledFeaturesRightListsItemContent>
          </StyledFeaturesRightListsItem>
          <StyledFeaturesRightListsItem>
            <StyledFeaturesRightListsItemBox> </StyledFeaturesRightListsItemBox>
            <StyledFeaturesRightListsItemContent>
              {' '}
              UI/UX Design & Dvelopment
            </StyledFeaturesRightListsItemContent>
          </StyledFeaturesRightListsItem>
        </StyledFeaturesRightLists>
      </StyledFeaturesRight>
    </StyledFeatures>
  );
}

const StyledFeatures = styled(FlexContent)`
	padding: 10rem 10rem;
	${FourthBreakOutHomePage({
    padding: '0rem 5rem',
  })}

	${ThirdBreakOutHomePage({
    flexDirection: 'column',
  })}
`;
const StyledFeaturesLeft = styled.div`
	${ThirdBreakOutHomePage({
    marginBottom: '2rem',
  })}
`;
const StyledFeaturesRight = styled.div`
	${ThirdBreakOutHomePage({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  })}
`;
const StyledFeaturesLeftImage = styled.img`
	width: 95%;
	object-fit: cover;
`;
const StyledFeaturesRightHeading = styled.h1`
	font-family: Rubik;
	font-weight: 500;
	font-size: 3.5rem;
	line-height: 5rem;
	color: #0b132a;
	margin-bottom: 1rem;

	${firstBreakOutHomePage({
    fontSize: '2.5rem',
  })}

	${ThirdBreakOutHomePage({
    textAlign: 'center',
    fontSize: '3.5rem',
  })}
`;
const StyledFeaturesRightParagraph = styled.p`
	font-family: Rubik;
	font-weight: normal;
	font-size: 1.6rem;
	line-height: 3rem;
	color: #4f5665;
	${firstBreakOutHomePage({
    fontSize: '1.2rem',
  })}

	${ThirdBreakOutHomePage({
    textAlign: 'center',
    fontSize: '1.6rem',
  })}
`;
const StyledFeaturesRightLists = styled.ul``;
const StyledFeaturesRightListsItem = styled.li`
	font-family: Rubik;
	font-style: normal;
	font-weight: normal;
	font-size: 1.4rem;
	line-height: 3rem;
	color: #4f5665;
	display: flex;
	align-items: center;
	margin: 2rem 0rem;
`;
const StyledFeaturesRightListsItemBox = styled.div`
	width: 2.5rem;
	height: 2.5rem;
	background-color: #ba55d3;
	border-radius: 0.5rem;
`;

const StyledFeaturesRightListsItemContent = styled.p`
	margin-left: 1rem;
`;

export default Features;
