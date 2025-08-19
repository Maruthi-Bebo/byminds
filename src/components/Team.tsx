import { PortableTextBlock } from 'next-sanity'
import React from 'react'

interface TeamMember {
  _key: string
  firstName: string
  lastName: string
  role: string
  image: {
    imageUrl: string
    imageDimensions: {
      width: number
      height: number
    }
  }
  about: PortableTextBlock[]
}

interface TeamProps {
  title: string
  introImage: {
    imageUrl: string
    imageDimensions: {
      width: number
      height: number
    }
  }
  introText: PortableTextBlock[];
  members: Array<TeamMember>
}

export default function Team(props: TeamProps) {
    console.log("team", props);
    
    return (
        <div>Team</div>
    )
}
