# vault
Stores almost-sensitive data in a portable text

## Vault format

keys_count (4 bytes) |
key1_sz (4 bytes) | key1_str (key1_sz bytes) |
key2_sz (4 bytes) | key2_str (key2_sz bytes) |
...
keyn_sz (4 bytes) | keyn_str (keyn_sz bytes) |
blob (n bytes)

key pulls from blob for values