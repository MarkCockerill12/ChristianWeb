import { getAllTopics } from "@/topics"
import CategoriesClient from "./categories-client"

export default function CategoriesPage() {
  // Fetch all topics on the server
  const availableTopics = getAllTopics()

  // Extract only the metadata to pass to the client, preventing massive markdown contents from bloating the JS bundle
  const categoriesMetadata = availableTopics.map(topic => ({
    id: topic.id,
    title: topic.title,
    description: topic.description,
    icon: topic.icon,
    color: topic.color,
    tags: topic.tags,
  }))

  return <CategoriesClient categories={categoriesMetadata} />
}
