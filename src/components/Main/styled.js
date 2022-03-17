import styled from "styled-components";

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  height: ${(props) => (props.height ? props.height : "auto")};
  width: ${(props) => (props.width ? props.width : "auto")};
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  height: ${(props) => (props.height ? props.height : "auto")};
  width: ${(props) => (props.width ? props.width : "auto")};
`;

export const MainWrapper = styled(FlexColumn)`
  background: #dddddd;
  padding: 15px;
  min-height: 100vh;
`;

export const Title = styled.span`
  color: #125d98;
  font-size: 96px;
  line-height: 96px;
  font-weight: 900;
  text-align: center;
`;

export const Subtitle = styled.span`
  color: #125d98;
  font-size: 30px;
  font-weight: 300;
  text-align: center;
  background: #f5a962;
  margin-top: 10px;
  padding: 2px 8px 5px 8px;
`;

export const TitlesColumn = styled(FlexColumn)``;

export const WorkRow = styled(FlexRow)`
  flex-wrap: wrap;
`;

export const WorkInfoParagraph = styled.p`
  color: #125d98;
  font-size: 24px;
  font-weight: 300;
  max-width: 500px;
  margin: 0;
  text-align: center;
`;

export const WorkInfo = styled.span`
  max-width: 400px;
  margin: 10px;
`;

export const ContentWrapper = styled(FlexColumn)`
  max-width: 1040px;
`;

export const LinksWrapper = styled(FlexRow)``;

export const HightlightedWord = styled.a`
  font-weight: 900;
  text-decoration: none;
  color: #125d98;
  cursor: pointer;
  border-bottom: 5px solid #f5a962;

  :visited {
    color: #125d98;
  }
`;

export const IconWrapper = styled.a`
  text-decoration: none;
  cursor: pointer;

  :not(:last-child) {
    margin-right: 20px;
  }
`;
