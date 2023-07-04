import { useStoryblokApi, ISbStoryData } from '@storyblok/astro'


export async function getExperiences() {
    const storyblok = useStoryblokApi();
    const { data } = await storyblok.get("cdn/stories", {
        content_type: "experience",
        version: import.meta.env.DEV ? "draft" : "published",
    });
    return data
}

export async function getExperienceStories() {
    const storyblok = useStoryblokApi();
    const response = await storyblok.getStories( {
        version: import.meta.env.DEV ? "draft" : "published"
    })
    const stories = response.data.stories
    return stories
}

export async function getExperienceStory(slug) {
    const sbApi = useStoryblokApi()
    const { data } = await sbApi.get(`cdn/stories/${slug}`, {
        version: import.meta.env.DEV ? "draft" : "published",
    })
    return data.story
}