import styled from '@emotion/styled'

import { TextJp } from '@/components/atoms/text/TextJp'
import { WorkCategory } from '@/components/molecules/WorkCategory'
import { workIntroduction } from '@/types/workTypes'

export const IntroductionBlock = (props: workIntroduction) => {
  const { text, period, usedLanguage, role, repository, repository2 } = props

  return (
    <_IntroductionBlock>
      <_Introduction>
        <TextJp fontSize="16px">{text}</TextJp>
      </_Introduction>
      <WorkCategory tag="制作期間">{period}</WorkCategory>
      <WorkCategory tag="使用言語/サービス">{usedLanguage}</WorkCategory>
      <WorkCategory tag="担当">{role}</WorkCategory>
      {repository2 ? (
        <>
          <WorkCategory tag="FEリポジトリ">
            <_RepositoryLink
              href={`https://${repository}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {repository}
            </_RepositoryLink>
          </WorkCategory>
          <WorkCategory tag="BEリポジトリ">
            <_RepositoryLink
              href={`https://${repository2}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {repository2}
            </_RepositoryLink>
          </WorkCategory>
        </>
      ) : (
        <WorkCategory tag="リポジトリ">
          <_RepositoryLink
            href={`https://${repository}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {repository}
          </_RepositoryLink>
        </WorkCategory>
      )}
    </_IntroductionBlock>
  )
}

const _IntroductionBlock = styled.div`
  padding: 24px 0;
  border-bottom: solid 0.7px ${({ theme }) => theme.colors.black};
`

const _Introduction = styled.div`
  margin-bottom: 12px;
`

const _RepositoryLink = styled.a`
  color: ${({ theme }) => theme.colors.black};
  text-decoration: underline ${({ theme }) => theme.colors.black};
`
