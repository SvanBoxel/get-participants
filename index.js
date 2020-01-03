const core = require('@actions/core');
const github = require('@actions/github');

try {
  const issueNumber = core.getInput('issue-number')

  const includeReviewers = core.getInput('reviewers')
  const includeAssignees = core.getInput('assignees')
  const includeAuthor = core.getInput('author')
  const includeCommenters = core.getInput('commenters')

  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}