/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Application} app
 */
module.exports = app => {
  // Your code here
  app.log('Yay, the app was loaded!')

  app.on('issues.closed', async context => {
    const labelUpdate = context.issue({ labels: ['complete']})
    return context.github.issues.replaceLabels(labelUpdate)
  })

  app.on('pull_request.opened', async context => {
    const asdf = context.issue({ body: '담당자의 리뷰를 기다려주세요'})
    return context.github.issues.createComment(asdf)
  })

  app.on('pull_request.opened', async context => {
    const a = context.issue({ labels: ['bug']})
    return context.github.issues.addLabels(a)
  })


  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}