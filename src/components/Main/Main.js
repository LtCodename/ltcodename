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
} from "./styled";
import { GithubIcon, LinkedinIcon } from "./../../icons";

const Main = () => {
  return (
    <MainWrapper height={"100vh"} justifyContent={"space-between"}>
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
        <TitlesColumn alignItems={"flex-start"} width={"100%"}>
          <Title>Hey, I'm Yevhen</Title>
          <Subtitle>{`Software engineer & front-end developer.`}</Subtitle>
        </TitlesColumn>
        <WorkRow
          justifyContent={"space-between"}
          width={"100%"}
          alignItems={"flex-start"}
        >
          <WorkInfo>
            <WorkInfoParagraph>
              {`Currently a front-end developer helping people develop and maintain a huge and complex NDA project at `}
              <HightlightedWord
                href="https://genesisdevelop.com/"
                target={"blank"}
              >{`Genesis Development`}</HightlightedWord>
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
              {` and `}
              <HightlightedWord
                href="https://jatapp.com/"
                target={"blank"}
              >{`Jat App`}</HightlightedWord>
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
