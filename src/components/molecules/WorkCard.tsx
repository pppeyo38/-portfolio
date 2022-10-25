import styled from '@emotion/styled'
import Image from 'next/image'
import { useRouter } from 'next/router'

type Props = {
  img: string
  title: string
  route: string
  product: string
  role: string
}

export const WorkCard = (props: Props) => {
  const { img, title, route, product, role } = props
  const router = useRouter()

  const onClickCard = () => {
    router.push(`/works/${route}`)
  }

  return (
    <_Card onClick={onClickCard}>
      <_Figure>
        <_Image src={`${img}`} alt="" layout="fill" />
      </_Figure>
      <_CradDetail>
        <_Product>{product}</_Product>
        <_Rabel>
          <_Title>{title}</_Title>
          <_Roll>/ {role}</_Roll>
        </_Rabel>
      </_CradDetail>
    </_Card>
  )
}

const _Card = styled.div`
  position: relative;
  overflow: hidden;
  width: 300px;
  height: 256px;
  border: 1px solid ${({ theme }) => theme.colors.subWhite};
  border-radius: 20px;
  box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 10%),
    0px 10px 10px -5px rgba(0, 0, 0, 4%);
  cursor: pointer;
`

const _Figure = styled.figure`
  position: relative;
  width: 100%;
  height: 70%;
  background: gray;
`

const _Image = styled(Image)`
  transition: 0.8s;
  ${_Card}:hover & {
    transform: scale(1.08);
  }
`

const _CradDetail = styled.div`
  display: flex;
  height: 30%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 18px;
  gap: 6px;
`

const _Rabel = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
`

const _Product = styled.span`
  display: inline-block;
  padding: 3px 10px 2px;
  background-color: ${({ theme }) => theme.colors.purple};
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWt.Regular};
`

const _Title = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWt.SemiBold};
  line-height: 22px;
`

const _Roll = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWt.Regular};
`
