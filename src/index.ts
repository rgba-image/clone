import { CreateImage } from '@rgba-image/common'
import { createImage } from '@rgba-image/create-image'

export const CloneFactory = ( createImage: CreateImage ) => {
  const clone = ( { width, height, data }: ImageData ) =>
    createImage( width, height, data.slice() )

  return clone
}

export const clone = CloneFactory( createImage )
