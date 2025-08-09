import type { Topic } from '../topics/types'

// Import all available topic files

import { 
  // archaeological, 
  // authentic,
   branches, 
  //  canon, 
  //  contradictions, 
  //  tuning, 
  //  godEvil, 
   hell, 
  // jesus, 
  // miracles, 
  // morality, 
  // nasa, 
  problemOfEvil, 
  // prophecy,
  religions,
  resurrection, 
  // science, 
  // slavery,  
  // trinity, 
  // women,
 } from '@/topics'

// Array of all available topics
export const availableTopics: Topic[] = [
  // archaeological,
  // authentic,
  branches,
  // canon,
  // contradictions,
  // tuning,
  // godEvil,
  hell,
  // jesus,
  // miracles,
  // morality,
  // nasa,
  problemOfEvil,
  // prophecy,
  religions,
  resurrection,
  // science,
  // slavery, 
  // trinity,
  // women,
  
]

// Function to get all topics
export function getAllTopics(): Topic[] {
  return availableTopics
}

// Function to get a topic by ID
export function getTopicById(id: string): Topic | undefined {
  return availableTopics.find(topic => topic.id === id)
}

// Function to get topics by tag
export function getTopicsByTag(tag: string): Topic[] {
  return availableTopics.filter(topic => 
    topic.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
  )
}
