import React from "react";
import {
  MainWrapper,
  Title,
  Subtitle,
  TitlesColumn,
  WorkRow,
  WorkInfoParagraph,
  ContentWrapper,
  HightlightedWord,
  WorkInfo,
  LinksWrapper,
  IconWrapper,
  FlexRow,
} from "./styled";
import { GithubIcon, LinkedinIcon } from "./../../icons";

const Main = () => {
  return (
    <MainWrapper justifyContent={"space-between"}>
      <LinksWrapper
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <IconWrapper
          href="https://www.linkedin.com/in/yevhen-chernenko/"
          rel="noopener noreferrer"
          target="_blank"
        >
          {LinkedinIcon}
        </IconWrapper>
      </LinksWrapper>
      <ContentWrapper>
        <TitlesColumn alignItems={"center"} width={"100%"}>
          <Title>Hey, I'm Yevhen</Title>
          <FlexRow width={"100%"}>
            <Subtitle>{`Software engineer & front-end developer.`}</Subtitle>
          </FlexRow>
        </TitlesColumn>
        <WorkRow justifyContent={"center"} width={"100%"} alignItems={"center"}>
          <WorkInfo>
            <WorkInfoParagraph>
              {`I am a React Developer at `}
              <HightlightedWord
                href="https://www.globallogic.com/"
                target={"blank"}
              >{`GlobalLogic`}</HightlightedWord>
              {`.`}
            </WorkInfoParagraph>
          </WorkInfo>
          <WorkInfo>
            <WorkInfoParagraph>
              {`Previously worked with `}
              <HightlightedWord
                href="https://enixan.com/"
                target={"blank"}
              >{`Enixan Entertainment`}</HightlightedWord>
              {`, `}
              <HightlightedWord
                href="https://lambda.direct/"
                target={"blank"}
              >{`Lambda Team`}</HightlightedWord>
              {`, `}
              <HightlightedWord
                href="https://jatapp.com/"
                target={"blank"}
              >{`Jat App`}</HightlightedWord>
              {` and `}
              <HightlightedWord
                href="https://genesisdevelop.com/"
                target={"blank"}
              >{`Genesis Development`}</HightlightedWord>
              {`.`}
            </WorkInfoParagraph>
          </WorkInfo>
        </WorkRow>
      </ContentWrapper>
      <LinksWrapper
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <IconWrapper
          href="https://github.com/LtCodename"
          rel="noopener noreferrer"
          target="_blank"
        >
          {GithubIcon}
        </IconWrapper>
      </LinksWrapper>
    </MainWrapper>
  );
};

export default Main;
