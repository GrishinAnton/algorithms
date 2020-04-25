#!/usr/bin/env node

const Comments = require("parse-comments");
const comments = new Comments();
const fs = require("fs");
const path = require("path");

new Promise(function(resolve, reject) {
  fs.readdir(process.cwd(), function(err, files) {
    if (err) {
      return reject(err);
    }
    Promise.all(
      files.filter(file => path.extname(file) === ".js").map(processFile)
    ).then(resolve);
  });
})
  .then(messages => {
    const list = messages
      .filter(Boolean)
      .map(link => `- ${link}`)
      .concat("");

    return new Promise(function(resolve, reject) {
      fs.readFile("README.md", "utf8", function(err, data) {
        if (err) {
          return reject(err);
        }
        let cut = false;

        resolve(
          data
            .split("\n")
            .map(line => {
              if (line.indexOf("## Done") === 0) {
                cut = true;
              } else if (cut) {
                return false;
              }
              return line;
            })
            .filter(line => line !== false)
            .concat(list)
            .join("\n")
        );
      });
    });
  })
  .then(data => {
    return new Promise(function(resolve, reject) {
      fs.writeFile("README.md", data, function(err) {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

function processFile(file) {
  return new Promise(function(resolve, reject) {
    fs.readFile(file, "utf8", function(err, data) {
      if (err) {
        return reject(err);
      }
      const ast = comments.parse(data);
      const root = ast.find(node => {
        const namespace = node.tags.find(({ title }) => title === "namespace");
        return namespace && namespace.name === "LEETCODE";
      });

      resolve(root && template(root));
    });
  });
}

function template(node) {
  return `<a href="${
    node.tags.find(({ title }) => title === "link").description
  }">${node.description}</a>`;
}
