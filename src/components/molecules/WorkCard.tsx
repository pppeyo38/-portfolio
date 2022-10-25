import styled from '@emotion/styled'
import Image from 'next/image'

export const WorkCard = () => {
  return (
    <_Card>
      <_Figure>
        <Image src="/" alt="" layout="fill" />
      </_Figure>
      <_CradDetail>
        <_Title>Title</_Title>
        <_Roll>Frontend</_Roll>
      </_CradDetail>
    </_Card>
  )
}

const _Card = styled.div`
  position: relative;
  overflow: hidden;
  width: 340px;
  height: 290px;
  border: 1px solid ${({ theme }) => theme.colors.subWhite};
  border-radius: 20px;
`

const _Figure = styled.figure`
  position: relative;
  width: 100%;
  height: 75%;
  background: gray;
`

const _CradDetail = styled.div`
  padding: 16px 30px;
  * + * {
    margin-top: 4px;
  }
`

const _Title = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWt.SemiBold};
`

const _Roll = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWt.Regular};
`
