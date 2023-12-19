export interface IUserRepositories {
  allow_forking: boolean;
  archive_url: string;
  archived: boolean;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  clone_url: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string;
  created_at: Date;
  default_branch: DefaultBranch;
  deployments_url: string;
  description: null | string;
  disabled: boolean;
  downloads_url: string;
  events_url: string;
  fork: boolean;
  forks: number;
  forks_count: number;
  forks_url: string;
  full_name: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  git_url: string;
  has_discussions: boolean;
  has_downloads: boolean;
  has_issues: boolean;
  has_pages: boolean;
  has_projects: boolean;
  has_wiki: boolean;
  homepage: null | string;
  hooks_url: string;
  html_url: string;
  id: number;
  is_template: boolean;
  issue_comment_url: string;
  issue_events_url: string;
  issues_url: string;
  keys_url: string;
  labels_url: string;
  language: null | string;
  languages_url: string;
  license: License | null;
  merges_url: string;
  milestones_url: string;
  mirror_url: null;
  name: string;
  node_id: string;
  notifications_url: string;
  open_issues: number;
  open_issues_count: number;
  owner: Owner;
  private: boolean;
  pulls_url: string;
  pushed_at: Date;
  releases_url: string;
  size: number;
  ssh_url: string;
  stargazers_count: number;
  stargazers_url: string;
  statuses_url: string;
  subscribers_url: string;
  subscription_url: string;
  svn_url: string;
  tags_url: string;
  teams_url: string;
  topics: string[];
  trees_url: string;
  updated_at: Date;
  url: string;
  visibility: Visibility;
  watchers: number;
  watchers_count: number;
  web_commit_signoff_required: boolean;
}

export enum DefaultBranch {
  Main = 'main',
  Master = 'master',
}

export interface License {
  key: string;
  name: string;
  node_id: string;
  spdx_id: string;
  url: string;
}

export interface Owner {
  avatar_url: string;
  events_url: EventsURL;
  followers_url: string;
  following_url: FollowingURL;
  gists_url: GistsURL;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: Login;
  node_id: NodeID;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: StarredURL;
  subscriptions_url: string;
  type: Type;
  url: string;
}

export enum EventsURL {
  HTTPSAPIGithubCOMUsersWanderleeDevEventsPrivacy = 'https://api.github.com/users/WanderleeDev/events{/privacy}',
}

export enum FollowingURL {
  HTTPSAPIGithubCOMUsersWanderleeDevFollowingOtherUser = 'https://api.github.com/users/WanderleeDev/following{/other_user}',
}

export enum GistsURL {
  HTTPSAPIGithubCOMUsersWanderleeDevGistsGistID = 'https://api.github.com/users/WanderleeDev/gists{/gist_id}',
}

export enum Login {
  WanderleeDev = 'WanderleeDev',
}

export enum NodeID {
  UKgDOBvkDww = 'U_kgDOBvkDww',
}

export enum StarredURL {
  HTTPSAPIGithubCOMUsersWanderleeDevStarredOwnerRepo = 'https://api.github.com/users/WanderleeDev/starred{/owner}{/repo}',
}

export enum Type {
  User = 'User',
}

export enum Visibility {
  Public = 'public',
}


export interface IRepositoryTagDto {
  stargazers_count: number
  license: License | null
  updated_at: Date;
  languages_url?: string;
  forks_count: number;
}
