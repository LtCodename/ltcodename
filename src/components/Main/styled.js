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
  padding: 30px;
`;

export const Title = styled.span`
  color: #125d98;
  font-size: 96px;
  font-weight: 900;
  line-height: 96px;
`;

export const Subtitle = styled.span`
  color: #125d98;
  font-size: 24px;
  font-weight: 400;
  margin-top: 15px;
`;

export const TitlesColumn = styled(FlexColumn)``;

export const WorkRow = styled(FlexRow)`
  margin-top: 10px;
`;

export const WorkInfoParagraph = styled.p`
  color: #125d98;
  font-size: 24px;
  font-weight: 400;
  max-width: 500px;
  margin: 0;
`;

export const WorkInfo = styled.span`
  height: 100%;
  background: rgb(245 169 98 / 90%);
  padding: 5px 10px 10px 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
  max-width: 400px;

  :not(:last-child) {
    margin-right: 20px;
  }
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
