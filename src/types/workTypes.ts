export type worksListContent = {
  img: string
  title: string
  route: string
  product: string
  role: string
}

export type worksListProps = {
  worksList: worksListContent[]
}

export type workIntroduction = {
  text: string
  period: string
  usedLanguage: string
  role: string
  repository: string
  repository2?: string
}

export type workDetailContent = {
  theme: string
  text: string
}

export type workPageProps = {
  images: {
    path: string
    alt: string
  }[]
  workTitle: string
  introduction: workIntroduction
  detail: workDetailContent[]
}
