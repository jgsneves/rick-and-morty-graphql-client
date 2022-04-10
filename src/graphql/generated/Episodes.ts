/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Episodes
// ====================================================

export interface Episodes_episodes_info {
  __typename: "Info";
  /**
   * The amount of pages.
   */
  pages: number | null;
  /**
   * Number of the next page (if it exists)
   */
  next: number | null;
}

export interface Episodes_episodes_results_characters {
  __typename: "Character";
  /**
   * The name of the character.
   */
  name: string | null;
}

export interface Episodes_episodes_results {
  __typename: "Episode";
  /**
   * The name of the episode.
   */
  name: string | null;
  /**
   * The air date of the episode.
   */
  air_date: string | null;
  /**
   * List of characters who have been seen in the episode.
   */
  characters: (Episodes_episodes_results_characters | null)[];
}

export interface Episodes_episodes {
  __typename: "Episodes";
  info: Episodes_episodes_info | null;
  results: (Episodes_episodes_results | null)[] | null;
}

export interface Episodes {
  /**
   * Get the list of all episodes
   */
  episodes: Episodes_episodes | null;
}

export interface EpisodesVariables {
  page?: number | null;
}
