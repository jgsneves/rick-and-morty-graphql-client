/* eslint-disable camelcase */
import { Characters_characters_results_episode } from '../graphql/generated/Characters';

const mapCharEpisodeResponse = (
  response: (Characters_characters_results_episode | null)[] | undefined,
): string[] => response?.map(episodes => episodes?.name ?? '') ?? [];

export default mapCharEpisodeResponse;
