import { Episodes_episodes_results_characters } from '../graphql/generated/Episodes';

const mapEpisodeCharsResponse = (
  response: (Episodes_episodes_results_characters | null)[] | undefined,
): string[] => response?.map(episodes => episodes?.name ?? '') ?? [];

export default mapEpisodeCharsResponse;
