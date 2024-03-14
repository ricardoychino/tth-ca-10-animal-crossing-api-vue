export type Villager = {
  name: string
  gender: 'Male' | 'Female'
  image_url: string
  quote: string
  phrase: string
  text_color: string
  title_color: string
  species: string
  personality: string
  birthday_day: string
  birthday_month: string
  nh_details?: {
    icon_url?: string
    hobby?: string
  }
}