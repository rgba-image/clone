import * as assert from 'assert'
import { createImage } from '@rgba-image/create-image'
import { fill } from '@rgba-image/fill'
import { clone } from '..'

describe( 'clone', () => {
  it( 'clones', () => {
    const source = createImage( 16, 16 )
    fill( source, [ 51, 153, 255, 127 ] )

    const dest = clone( source )

    assert.deepEqual( dest, source )
  })

  it( 'operations on clone do not affect source', () => {
    const expect = createImage( 16, 16 )
    fill( expect, [ 51, 153, 255, 127 ] )

    const source = createImage( 16, 16 )
    fill( source, [ 51, 153, 255, 127 ] )

    const dest = clone( source )
    fill( dest, [ 0, 0, 0, 255 ] )

    assert.deepEqual( source, expect )
  } )
})
