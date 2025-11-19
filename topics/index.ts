// Export all topic types
export type { Topic } from './types'

// Export individual topics
export { archaeological } from './archaeological'
export { branches } from './branches'
export { canon } from './canon'
export { contradictions } from './contradictions'
export { tuning } from './fine-tuning'
export { godEvil } from './godEvil'
export { hell } from './hell'
export { jesus } from './jesus'
export { miracles } from './miracles'
export { morality } from './morality'
export { nasa } from './nasa'
export { problemOfEvil } from './problem-of-evil'
export { prophecy } from './prophecy'
export { religions } from './religions'
export { resurrection } from './resurrection'
export { science } from './science'
export {slavery} from './slavery'
export { trinity } from './trinity'
export { women } from './women'


    /*    //TODO add topics, Verify all sources, Fix formatting (width), Remove needless tags from subtopics


TOPICS THAT NEED INDIVIDUAL FILES CREATED:
- Evolution vs. Creation (evolution-creation)

- Christianity and Homosexuality (homosexuality)

- do you need to be baptised to be saved?

- free will

- why did God put the tree of knowledge in the garden?

- why did Jesus let lazarus die?

- are we in the end days?

- About each of the books of the bible (Author, date, point, etc)

- evidence of god

- big bang

- did God change

- 

*/





// Re-export utility functions
export { getAllTopics, getTopicById, getTopicsByTag } from '../lib/getTopics'
