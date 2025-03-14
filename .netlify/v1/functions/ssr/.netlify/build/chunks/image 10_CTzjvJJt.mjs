const imagepratique = new Proxy({"src":"/_astro/image 10._z5-o-9q.png","width":331,"height":211,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/kilia/OneDrive/المستندات/GitHub/sae-203-2025-kilian-breuil/src/assets/img/image 10.png";
							}
							
							return target[name];
						}
					});

export { imagepratique as i };
