import { useStoryblokApi, ISbStoryData } from '@storyblok/astro'

const isShowingDrafts = (import.meta.env.DEV || import.meta.env.SHOW_DRAFT_EXPERIENCES)
const storyblok = useStoryblokApi()

export async function getExperiences() {
    const { data } = await storyblok.get("cdn/stories", {
        content_type: "experience",
        version: isShowingDrafts ? "draft" : "published",
    });
    return data
}

export async function getExperienceStories() {
    const response = await storyblok.getStories( {
        version: isShowingDrafts ? "draft" : "published"
    })
    const stories = response.data.stories
    return stories
}

export async function getExperienceStory(slug) {
    const { data } = await storyblok.get(`cdn/stories/${slug}`, {
        version: isShowingDrafts ? "draft" : "published",
    })
    return data.story
}