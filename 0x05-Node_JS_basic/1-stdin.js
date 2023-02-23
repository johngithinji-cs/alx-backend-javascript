process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
<<<<<<< HEAD
  const chunk = process.stdin.read();

  if (chunk) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
=======
	const name = process.stdin.read();
	if (name) {
		process.stdout.write(`Your name is: ${name}`);
	}
});

process.stdin.on('end', () => {
	process.stdout.write('This important software is now closing\n');
});
>>>>>>> f6a209a59af326e99c88214bd764021e86bc97a7
