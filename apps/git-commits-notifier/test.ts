import * as path from "path";
import * as fs from "fs";
import simpleGit from "simple-git";
import moment from "moment";
import { z } from "zod";

const configSchema = z.object({
   repos: z.array(z.object({
      url: z.string(),
      main_branch: z.string(),
   })),
   cron_interval: z.string(),
});

/**
 * A function to log git commits
 * @param repo_url The url (or absolute path) of the git repository.
 * @param main_branch The repository's main branch.
 */
async function logGitCommits(repo_url: string, main_branch: string) {
   const git = simpleGit(repo_url);
   await git.fetch();

   // Get the latest commit on the local branch
   const localLog = await git.log(["HEAD"]);
   const localLatestCommit = localLog.latest;

   // Get the latest commit on the remote branch
   const remoteLog = await git.log([main_branch]); // Change 'main' if your branch is different
   const remoteLatestCommit = remoteLog.latest;

   if (localLatestCommit.hash !== remoteLatestCommit.hash) {
      console.log("New commits found:");

      // Get the commit history since the last local commit
      const newCommits = await git.log({
         from: localLatestCommit.hash,
         to: remoteLatestCommit.hash,
      });

      // Output the new commits
      newCommits.all.forEach(commit => {
         console.log(`- ${commit.date}: ${commit.message} (${commit.hash}) by ${commit.author_name}`);
      });
   } else {
      let dirname = path.parse(repo_url).name
      console.log(`\nNo new commits found in '${dirname}'.`);

      let latestLogs = [...localLog.all]
         .sort((a, b) =>
            moment(b.date).toDate().getTime()
            - moment(a.date).toDate().getTime())
         .slice(0, 10);

      console.log("Latest commits:");
      for (let log of latestLogs) {
         console.log(`[${moment(log.date).format(`MMMM Do YYYY, hh:mm:ss a`)}]: ${log.hash} ${log.message}`);
      }
   }
   return;

}

async function main() {
   let configFile = path.join(process.cwd(), `git-diffs.config.json`);
   if (!fs.existsSync(configFile)) return process.exit(-1);

   let config = JSON.parse(fs.readFileSync(configFile, { encoding: `utf-8` }));
   let configParsed = configSchema.safeParse(config);

   if (!configParsed.success) return process.exit(-1);

   for (let { url, main_branch } of configParsed.data.repos) {
      await logGitCommits(url, main_branch);
   }
}

main().catch(console.error);
// logGitCommits(`C:\\Users\\Victorio\\Desktop\\Coding\\Front-End\\career-craft-job-posting-platform`)
//    .catch(console.error);