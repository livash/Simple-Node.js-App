function router(handle, pathname) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function') {
    return handle[pathname]();
  } else {
    console.log("No request nandler found for " + pathname);
    return "404 Not found";
  }
}

exports.router = router;
