import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
export function useLogin() {
  const navigate = useNavigate();
  const { isLoading, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      navigate("/dashboard", { replace: true });
      console.log(user);
    },
    onError: (err) => {
      console.log(err);
      toast.error("Provided email or password are incorrect.");
    },
  });
  return { login, isLoading };
}
